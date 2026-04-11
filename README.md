# AfuDB
Airframe Ultra Mod Database. Directly inspired by the Rain World Mod Database by andrewfm.

## How to submit
**READ AND FOLLOW ALL OF THE INSTRUCTIONS OR YOUR SUBMISSION WILL BE DENIED. YOU THEN MUST TO CORRECT IT BEFORE SUBMITTING AGAIN.**
### Requirements
- **Your submission must include an image.** It needs to be exactly 2000 x 1000 pixels in size and in the .png format. The file name must be the same as the name of your mod. Later you will be entering your mod name into a field; copy the exact way you write it at that step and set it as the image name, including any spaces and caps that were included in the mod name. **They must be identical.**
- **You must include a link to download your mod.** Github is not required but is encouraged.
- **The name of your mod must be unique.** The database uses mod names for organizing mods and mod images, having an identical mod name to someone else would both affect the database and make things confusing for everyone.

### Instructions
Each bullet point will start with a quick explanation of what to do, written with the assumption that you are familiar with Github. If you are not familiar with github, read the following indented bullet points for further clarification.
- Make a fork of the repo's main branch.
  - You need to make a new fork in order to make your additons as you cannot edit the repository directly. Click the fork button at the top right of the page.
  - Name it whatever you want.
- Open the file named ``submissions.js`` in the root folder and begin editing.
  - Once you reach the main page of your fork, open ``submissions.js``, found near the top of the page with the rest of the source code.
  - Click the pencil symbol on the right to begin editing.
- Scroll all the way to the bottom of the file.
- Copy the last submission. The image below shows what you should be copying:
![A screenshot of the submissions.js file highlighted what should be copied](/assets/readme_img/Screenshot%202026-04-10%20175016.png)
- Paste it below the last copy
- Go through each field and add info specific to your mod; the field names should make the required info obvious. **Only change the text inside the quotes. Besides for the** ``supported_game_versions`` **field, you should not be deleting any quotation marks at all.**
- Speaking of ``supported_game_versions``, below is a list of every current possible option. **Do not enter anything other than the following entries. Just copy and paste them from this list exactly with no added spaces at the end.**
  - Character Creator
  - Beta 1
  - Beta 2
  - Beta 3
  - Beta 4
  - Beta 5
- Look for a previous entry with multiple supported versions to see how it should be formatted. All versions are kept inside the braces ``[]`` and each version is inside quotation marks ``""`` and each are sepperated by commas ``,``.
![A screenshot of the submissions.js file focused on how a properly formatted supported game versions field should look](/assets/readme_img/Screenshot%202026-04-10%20180101.png)
- Once every field has been updated, save your changes. You'll notice the main page has a "Your fork is 1 commit ahead of RosePT-10/AfuDB:main" if you did it right. One more commit before you can send the pull request to us:
- Submit your mod image (following the requirements listed above) inside the ``mod_img`` folder. The file structure is ``assets/mod_img/[mod name].png``
  - In order to submit your **REQUIRED IMAGE SUBMISSION**, click the "Add file" button at the top and select "Upload files"
  - You may now drag and drop your mod image. **The image must be exactly 2000 x 1000 pixels in size and in the .png format. Do not submit images of any other size or format.**
  - Commit the change (do not make another pull request, just click the green button).
  - The image should have been dumped in the root folder. You now need to rename it to put it in the right place. Open the image file and begin to edit it.
  - At the top you can change the file name. This is very important: **CHANGE THE FILE NAME TO BE THE SAME AS YOUR MOD NAME.** If your submission has ``"mod_name": "TestMod",``, the image should be named ``TestMod.png``. **Submissions with a mismatched image name will be denied.**
  - Now you need to use github web's weird system for moving files into folder. At the beginning of the file name, type ``assets/``. The slash is very important as that will put it into the ``assets`` folder. Now also type ``mod_image/``. Now the image is where it should be and has the correct file name. You may commit the change.
- Make a pull request. Title the request "New Submission [mod name]". if your mod is named "TestMod" then the pull request should be "New Submission TestMod"
  - Now you can finally make a **pull request.** This will send your changes to us and, if you did everything correctly, they will be pulled into to the repo and your mod will show up on AfuDB.
  - In order to make a pull request, click the "Code" tab at the top of the screen to get to the main page for your fork.
  - There should be a bar near the top which says "This branch is 2 commits ahead of RosePT-10/AfuDB:master". On the right side of that bar, click "Contribute" and then "Open pull request".
  - **Make the title of the pull request "New Submission [mod_name]"**. If your mod name was ``TestMod``, the title should be "New Submission TestMod".
  - Now just simply click the green "Create a pull request" button! (also leave "Allow edits by maintainers" checked as that will make it easier for everyone if we can correct simple mistakes without having to ask you to do it yourself. **Do not expect us to make corrections for you, format your submission appropriately.**)
- We will accept the pull request whenever someone gets around to it. Thanks!
