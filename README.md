# mask-i-frontend [(DEMO Click Here)](https://www.youtube.com/watch?v=4-SQfENmmd8&feature=emb_title)
React frontend interface for AI security system

## Inspiration

Earlier this month, countries announced the reopening of most of their essential businesses. Despite this news, we have seen an uptick in cases of COVID-19 due to a lack of enforcement around the proper guidelines surrounding workplace protection.

## What it does

The intended goal of the application is to distinguish if a person entering a designated area is wearing a mask. The camera will detect with high confidence whether a mask is detected. If a mask is detected, a light installed outside of an entry point will flash green and the person is allowed to enter. If not, the light will flash red and prohibit entry. This serves to prevent those without the proper facial covering to set foot into your place of business and can greatly limit the risk of infectious spread.

## How it works

This application works by using a Keras Tensorflow model which we created to classify whether or not a person is wearing a mask. It returns a confidence value which is then used to specify whether or not the green or red LED goes off. The LED is representative of a lock for a business entrance. We then stream this video feed to the localhost. Our react frontend utilizes this video stream to display it accordingly to the user. The react app is also hosted on the localhost which prevents any data breaches from outside users. Also since it's on the localhost any user can access the site from their device as long as it's connected to the same Wifi as the Raspberry Pi. 


The application can be used for both commercial or personal purposes. To start using the application, you will need access to one or more cameras, depending on the number of entry points you would like to cover. Once you’ve installed your camera(s) at each entry point, the user creates an account on our website. For commercial businesses, there will be two types of users - employees and administrators. Administrators can change settings. Both administrators and employees can view a log of all events.

![Functionality](https://media1.giphy.com/media/kG8P2HofVnRK9MI2cs/giphy.gif) 

## How we built it

**Deep-learning Model**

- The AI model is built using a convolutional neural network design with TensorFlow. We were able to train it with up to a 97% accuracy

The original dataset is prepared by [Prajna Bhandary](https://www.linkedin.com/in/prajna-bhandary-0b03a416a/) and available at [Github](https://github.com/prajnasb/observations/tree/master/experiements/data) which provides sample sets of simulated masked face images. So far the model was trained for only 20 epochs using a batch size of 35. We plan to train our model with additional datasets to increase its accuracy when dealing with other factors for example people with different colored masks and different shaped masks. The training history can be seen in the following graphs:

![Training](https://media.giphy.com/media/WVFiUNtapJki42x2WD/giphy.gif)

The model has achieved an accuracy value of 0.9746 on the validation dataset with 20 training epochs

![Accuracy](https://i.imgur.com/UZ3BfJ0.png)
![Loss metric](https://i.imgur.com/kJWgopJ.png)

**Frontend**

- The frontend was built with React using the Material UI library. It contains setting to change the video setting and an activity log of when the camera picked up a face. 

![web](https://i.imgur.com/sdpwK31.png)
![mobile](https://i.imgur.com/CGnU2m3.png)

**Backend**

- The backend was built with Nodejs/Expressjs using MongoDB. This implemented to help keep track of users activity logs and authentication but is not being utilized not because of the security risk a live backend brings. We've decided to keep things local instead to protect the integrity of the system.

**Raspberry Pi**

- The Raspberry Pi backend code was built with python3 OpenCV and flask. Opencv utilized the webcam attached to gather facial data that comes from the facial recognition system. It is then passed through the AI model which returns its prediction. At this point, Flask is used to stream the video with the highlighted face that was scanned and a prediction around their face to the localhost.

![raspi](https://i.imgur.com/V8nhN2C.jpg)

![raspi-outline](https://i.imgur.com/KaM5otG.jpg)

## Challenges we ran into
(Ian)

One of the main challenges was creating and training the Tensorflow model, being I've never worked with AI or deep learning in any way this was a huge change for me. The Second main challenge was getting all of this to run on a Raspberry Pi. Getting the model running on the Pi was probably the hardest out of all the parts. In the future, we would like to use Tensorflow Lite to run our model which will help things run smoother. We are in the process now of implementing it but haven't finished yet.

In the end, I learned a lot about TensorFlow and running it on a Raspberry Pi


## Accomplishments that I'm proud of
- Building my first custom model
- Streaming my custom model with Opencv to a flask server


## What's next for Mask-i
- Updating the Pi to run Tensorflow Lite
- Build more functionality with the frontend and the webcam settings
- Re-train the model using other datasets to help improve its predictions. 
