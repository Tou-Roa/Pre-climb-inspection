# Pre-Climb Check

A phone app for pre-climb tree inspections. It works offline, keeps every inspection on your phone, captures signatures on screen, and saves a signed PDF of each finalised form.

## Put it on your phone (one-time, about 5 minutes)

The app is a set of web files. Your phone needs to load them once from a web address, then it runs offline from the home screen. Your inspection data never goes to that address; it stays on the phone.

1. Host the folder (free), using either:
   - **Netlify Drop**: go to app.netlify.com/drop, sign in, and drag this whole `preclimb` folder onto the page. You get an https address.
   - **GitHub Pages**: create a repository, upload these files, then Settings > Pages > deploy from the main branch.
2. Open that address on your phone.
   - **iPhone (Safari)**: Share > Add to Home Screen.
   - **Android (Chrome)**: menu > Add to Home screen / Install app.
3. Open it from the home screen icon. It now works with no signal.

## Saving to a folder

- **iPhone and most Android phones**: when you finalise, tap **Save PDF**, choose **Save to Files** (or Drive / Files on Android) and pick your inspections folder. The phone remembers the last folder.
- **Browsers that support folder access** (Chrome or Edge on a laptop or tablet): Settings > **Link a folder**. Every finalised inspection then saves its PDF and a `.json` data file there automatically.

Each finalised record is named `PreClimb_<date>_<tree ID>_<site>.pdf`.

## Using it

1. **New inspection** at the base of the tree. It saves as you type.
2. Work through sections 1 to 6. Any concerning answer turns amber and needs a note or control.
3. Section 7: choose the decision, then the climber and ground person sign with a finger.
4. **Finalise**. The app lists anything missing; once complete, the form locks and the PDF is saved. Post-climb notes stay editable, and **Save PDF again** re-exports.

## Backups

Inspections live in the browser's storage on the phone. Clearing browser or website data deletes them. Use Settings > **Back up all** regularly, and **Restore from backup** to move records to a new phone.

## Updating the app

After changing any file, edit `VERSION` in `sw.js` (e.g. `preclimb-v2`) and re-upload, so phones pick up the new version. Saved inspections are not affected.
