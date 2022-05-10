# Setting up the Sheets API
1. Create a [Sheets API account](https://www.youtube.com/watch?v=UGN6EUi4Yio) 
2. Take the server credentials and store them into a `.env` file (if you're a groupmate, ask [Jethro](https://github.com/AmGthrow) for the credentials)
3. Run `npm install` and `npm start` to start an instance of the server

The linked workbook needs the following:
- a spreadsheet entitled "Waitlist" for storing client emails
- the "Waitlist" sheet needs to have a header called "Email"

# API Endpoints
## Waitlist Emails
The API can store emails from clients signing up for the waitlist. 

![Example of a client subscribing to waitlist](docs/waitlistAPI.gif)


Send a `POST` request to `/api/waitlist` with the payload `{"email" : client_email_here}`
