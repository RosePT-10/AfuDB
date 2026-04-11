# AfuDB
Airframe Ultra Mod Database. Directly inspired by the Rain World Mod Database by andrewfm.

## How to submit
**READ AND FOLLOW ALL OF THE INSTRUCTIONS OR YOUR SUBMISSION WILL BE DENIED. YOU THEN MUST TO CORRECT IT BEFORE SUBMITTING AGAIN.**
- Open ``submissions.js``, found near the top of the page with the rest of the source code.
- Click the pencil symbol on the right to begin editing.
- You will be told you must fork the repository in order to edit; Accept and make an new fork.
- You may now edit the file and upon saving your changes the new fork will be created.
- Scroll all the way to the bottom of the file
- Copy the last submission. The image below shows what you should be copying:
![A screenshot of the submissions.js file highlighted what should be copied](https://github.com/RosePT-10/AfuDB/blob/e6153e32d035611b12d6a0dba8018f3d96895820/assets/readme_img/Screenshot%202026-04-10%20175016.png)
- Paste it below the last copy
- Go through each field and add info specific to your mod; the field names should make the required info obvious. **Only change the text inside the quotes. Besides for the** ``supported_game_versions`` **field, you should not be deleting any quotation marks at all.**
- Speaking of ``suported_game_versions``, below is a list of every current possible option. **Do not enter anything other than the following entries. Just copy and paste them from this list exactly with no added spaces at the end.**
  - Character Creator
  - Beta 1
  - Beta 2
  - Beta 3
  - Beta 4
  - Beta 5
- Look for a previous entry with multiple supported versions for how it should be formatted. All versions are kept inside the braces ``[]`` and each version is inside quotation marks ``""`` and each are sepperated by commas ``,``.
![A screenshot of the submissions.js file focused on how a properly formatted supported game versions field should look](https://github.com/RosePT-10/AfuDB/blob/9c647ce8d42996fe5d99b94cec7fe2ff042dabfb/assets/readme_img/Screenshot%202026-04-10%20180101.png)
- **The order field is used for your REQUIRED image submission.** Set the order field to +1 the last submission. If the last submission has ``"order": "4"`` then yours should be ``"order": "5"``. Once every field has been updated, save your changes and create your new fork.
- In order to submit your image, you first need to navigate to your new fork:
  - Click "Code" at the top left of the screen to get back to the main page for the repo.
  - On the right side of the screen under the "About" description, click on the "forks" button
  - You will see a list of all forks, find yours and click it to see your version of the repo
- Now that we're in the right place, click the "Add file" button at the top and select "Upload files"
- You may now drag and drop your mod image. **The image must be exactly 2000 x 1000 pixels in size and in the .png format. Do not submit images of any other size or format.**
- Commit the change (do not make another pull request, just click the green button)
- The image should have been dumped in the root folder. You now need to rename it to put it in the right place. Open the image file and begin to edit it.
- At the top you can change the file name. This is very important: **CHANGE THE FILE NAME TO BE THE SAME AS THE ORDER NUMBER.** If your submission is order number 5, the image should be named ``5.png``. **Submissions with a mismatched image name will be denied.**
- Now you need to use github web's weird system for moving files into folder. At the beginning of the file name, type ``assets/``. The slash is very important as that will put it into the ``assets`` folder. Now also type ``mod_image/``. Now the image is where it should be and has the correct file name. You may commit the change.
- Now you can finally make a **pull request.** This will send your changes to us and, if you did everything correctly, they will be pulled into to the repo and your mod will show up on AfuDB.
- In order to make a pull request, click the "Code" tab at the top of the screen to get to the main page for your fork.
- There should be a tab which says "This branch is 2 commits ahead of RosePT-10/AfuDB:master". On the right side of that tab, click "Contribute" and then "Open pull request".
- **Make the title of the pull request "New Submission [order number]"**. If your order number is 5, the title should be "New Submission 5".
- Now just simply click the green "Create a pull request" button (also leave "Allow edits by maintainers" checked as that will make it easier for everyone if we can correct simple mistakes without having to ask you to do it yourself. Do not **expect** us to make corrections for you, format your submission appropriately.)
- We will accept the pull request whenever someone gets around to it.
