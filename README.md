# Hackathon BBoost Basic Application

This template repository provides an hello world example of a Lenra app to get you started building your own.

## Requirements

Docker is required to use the templates. Follow this [link](https://docs.docker.com/get-docker/) for official installation instructions. 

## Usage 

To run this application:
```bash
# Go to the root of this repository
cd hackathon-bboost
# Run the app using docker
docker run -it --rm -p 4000:4000 -v ${PWD}:/home/app/application lenra/devtools-node12
```

## How does it work?

### UI

The UI is mainly composed of an `index` and some pages.

The `index` is basically the entry page of your app which will redirect to the correct page.

```javascript
function getCurrentPage(currentPage, data) {
	switch (currentPage) {
		case "homePage":
			return homePage(data);
	}
}
```

The `getCurrentPage` method is what will get you to the correct page, you can add as much pages as you want by just adding some cases in the switch as long as you have created a new page like homePage. 

### Resources

The resources folder is where you can store all of the images needed inside of the application. With that, an image can be easily used inside your application, for example with the following code for the `appicon.png` image:

```json
{
    type: "image",
    path: "appicon.png"
}
```

### Listeners

The listeners folder is where you will put all of the interactivity of the application. The data is initalized there. 
