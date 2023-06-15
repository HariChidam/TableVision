# TableVision

1. Clone the repo
2. You will need to create the virtual environment
   ```python3 -m venv env```
3. You will need to activate ```env```
   ```source env/bin/activate```
4. Install all the dependecies needed for the backend 
   ```pip install -r requirements.txt```
5. Download best.pt from TableVison GDrive and put it in the root directory

# Running TableVision

1. Split the terminal
2. In one ```cd frontend```
3. In the other ```cd backend```
4. In the backend terminal first activate the virtual environment ```source env/bin/activate`` then run the script ```python3 detect.py```
4. In the frontend terminal just run the next app ```npm run dev```

You should be all set now!

# To run with the proprietary TableVision Custom CV model email hari.chidam@gmail.com!

1. Once received put ```best.pt``` in ```/backend```
2. In ```/backend/detect.py``` comment line 9 and uncomment line 8
3. In ```/frontend/components/Room.js``` comment line 39 and uncomment line 38

You are all set to run TableVision with our custom model!
