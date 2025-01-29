# workshop-5
CSV table
## URL
https://clementine0507.github.io/workshop-5/
### Notes
![5b1e86a7934ecb6beeaf4b99f035272](https://github.com/user-attachments/assets/fbc2e3fb-b85a-4317-a836-7b45ab6321d5)

![6d696b6991dd9940c49548f33ec0617](https://github.com/user-attachments/assets/92c8d52b-60e5-44b8-ae6b-d5aad890336e)

Load the image, set the image coordinates and size.

![f82f93f311a87e646137c2f8dac7523](https://github.com/user-attachments/assets/7ed7693c-c006-4238-a14a-091433be0148)

![1cdf743adcd82315613dfe0a8e16493](https://github.com/user-attachments/assets/13886cbb-d57a-4790-81e0-9a2745b2c09e)

![5a273950412dd55826c6482d5bee807](https://github.com/user-attachments/assets/c9f97501-b464-4c39-bfe6-6591f8b46de4)

If want to add more images，fistly load photos from other folders, then remove `weekLabels` and its related variables.

![68f53332cbfa179c1442eb06a914d86](https://github.com/user-attachments/assets/506ddc65-1794-457e-ac96-711874d4a498)

![5f610cef31da8c0201ff2aab813623d](https://github.com/user-attachments/assets/11d38572-beb7-4553-9bb2-9931ec683521)

![21c96f38c3c03a26834e18fdb1a2f2d](https://github.com/user-attachments/assets/06264694-436d-420a-92a6-fd9f365d12cf)

To replace the data in the CSV file with the corresponding images, we need to copy the "apple" section and modify it to create the "banana" section.

![36309ac3e0dcf677d996544f04d5334](https://github.com/user-attachments/assets/86173378-5739-4260-a74a-d226bcf1bf99)

Make the image on a separate line, no larger than the canvas.

#### Processing

1. CVS:the number of times I play different games each week
2. download images in the social media
   
![image](https://github.com/user-attachments/assets/7a63a70d-4ce2-4ae8-8e1a-af1ea24d5da5)

I wrote the first version of the code based on the workshop5.

![b00bcdf76e7822b1f2ad4e4c55cf2f2](https://github.com/user-attachments/assets/fc3f6447-db05-464a-b87e-7d671cd89653)

![8637d82aa95cffb105e0b2ad19fb7f4](https://github.com/user-attachments/assets/06bfefba-78a0-43d8-9171-4ef3d061be2a)

![6ba9636341d4c3cb1acadea79de376f](https://github.com/user-attachments/assets/737a141d-ec33-46d8-ab49-45bb4141dcb8)


But this code wouldn't run, so I checked it
1. let = va, mc, pg, lol;
2. add: imageModel(CENTER);

The code still wouldn't run, so I asked my cousin to look at the list of errors for me.

![182c67c4386b4b043b1351cef9a0df8](https://github.com/user-attachments/assets/7a27c59b-5783-4f87-a1b4-03e0a219171c)

After double-checking, I finally figured out the problem: I named the folder ‘images’, but I spelled it ‘image’, which caused the path to not be found.

![f0650d4b7befca0ef5e0b50682ecb1b](https://github.com/user-attachments/assets/4785463c-6a69-4df2-b671-6fb5acfc98de)

All the images were grouped together, so I added two lines of code to make each row represent a different week.

![297089cbe4c053fbef6da9393a013a0](https://github.com/user-attachments/assets/7d3b4614-b5cf-4795-b404-1c300326f6a1)

Following the previous format, force the Ypos to move to the next row at the end of each loop. When the next loop runs, reset the Xpos to its starting position.
