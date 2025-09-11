const dialogflow = require('@google-cloud/dialogflow');
const { WebhookClient } = require('dialogflow-fulfillment');
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

// Helper function to extract string value from Dialogflow parameters
function getParameterValue(param) {
    if (!param) return null;
    
    // If it's an array, get the first element
    if (Array.isArray(param)) {
        if (param.length === 0) return null;
        param = param[0]; // Get first element from array
    }
    
    // If it's already a string or number
    if (typeof param === 'string' || typeof param === 'number') return param.toString();
    
    // If it's an object with name property (person entity)
    if (param && typeof param === 'object' && param.name) return param.name;
    
    // If it's an object with other properties, try to get the first meaningful value
    if (param && typeof param === 'object') {
        const keys = Object.keys(param);
        for (let key of keys) {
            if (param[key] && (typeof param[key] === 'string' || typeof param[key] === 'number')) {
                return param[key].toString();
            }
        }
    }
    
    return param;
}

// Helper function to format date
function formatDate(dateString) {
    if (!dateString) return null;
    
    try {
        const date = new Date(dateString);
        // Format: DD/MM/YYYY
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    } catch (error) {
        console.log('Date formatting error:', error);
        return dateString;
    }
}

// Helper function to format time
function formatTime(timeString) {
    if (!timeString) return null;
    
    try {
        const date = new Date(timeString);
        // Format: HH:MM AM/PM
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    } catch (error) {
        console.log('Time formatting error:', error);
        return timeString;
    }
}

app.post("/webhook", async (req, res) => {
    var id = (res.req.body.session).substr(43);
    console.log("Session ID:", id);

    const agent = new WebhookClient({ request: req, response: res });
    console.log("Intent from Dialogflow =>", agent.intent);
    
    // Debug: Log all parameters
    console.log("All parameters:", JSON.stringify(agent.parameters, null, 2));

    // ======================
    // Book a Table Intent
    // ======================
    function bookTable(agent) {
        console.log("Intent => Book a Table");
        
        // Extract and clean parameters
        const fullName = getParameterValue(agent.parameters.fullName);
        const phoneNumber = getParameterValue(agent.parameters.phoneNumber);
        const email = getParameterValue(agent.parameters.email);
        const numberOfGuests = getParameterValue(agent.parameters.numberOfGuests);
        const bookingDate = formatDate(agent.parameters.bookingDate);
        const bookingTime = formatTime(agent.parameters.bookingTime);

        console.log("Extracted parameters:", {
            fullName, phoneNumber, email, numberOfGuests, bookingDate, bookingTime
        });

        if (!fullName) return agent.add("May I know your full name?");
        if (!phoneNumber) return agent.add("Could you share your phone number?");
        if (!email) return agent.add("What's your email address?");
        if (!numberOfGuests) return agent.add("How many guests should I reserve the table for?");
        if (!bookingDate) return agent.add("On which date would you like to book the table?");
        if (!bookingTime) return agent.add("At what time should I make the reservation?");

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: "boxerbaloch2211@gmail.com",
              pass: "nqcj tpio szzo fccp",
            },
          });

          (async () => {
            const info = await transporter.sendMail({
              from: "boxerbaloch2211@gmail.com",
              to: email,
              subject: "Hello email sent",
              text: `✅ Table booked for ${fullName} on ${bookingDate} at ${bookingTime} for ${numberOfGuests} guests. We will contact you at ${email}.`, // plain‑text body
            //   html: "<b>Hello world?</b>", // HTML body
            });
          
            console.log("Message sent:", info.messageId);
          })();

        const responseMessage = `🍽️ Your table awaits, ${fullName}.  

Reserved for ${numberOfGuests} guests on 📅 ${bookingDate} at ⏰ ${bookingTime}.  
We look forward to hosting you at The Royal Spoon, where every moment is crafted with elegance ✨.`
;
        console.log("Sending response:", responseMessage);
        agent.add(responseMessage);
    }

    // ======================
    // Book for an Event Intent
    // ======================
    function bookEvent(agent) {
        console.log("Intent => Book For Event");
        
        // Extract and clean parameters
        const person_name = getParameterValue(agent.parameters.person_name);
        const phone_number = getParameterValue(agent.parameters.phone_number);
        const email_address = getParameterValue(agent.parameters.email_address);
        const event_type = getParameterValue(agent.parameters.event_type);
        const event_date = formatDate(agent.parameters.event_date);
        const event_time = formatTime(agent.parameters.event_time);
        const number_of_guests = getParameterValue(agent.parameters.number_of_guests);

        console.log("Extracted event parameters:", {
            person_name, phone_number, email_address, event_type, event_date, event_time, number_of_guests
        });

        if (!person_name) return agent.add("May I know your full name?");
        if (!phone_number) return agent.add("Could you share your phone number?");
        if (!email_address) return agent.add("What's your email address?");
        if (!event_type) return agent.add("What type of event would you like to book?");
        if (!event_date) return agent.add("On which date should I book your event?");
        if (!event_time) return agent.add("At what time will your event take place?");
        if (!number_of_guests) return agent.add("How many guests will be attending the event?");

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: "boxerbaloch2211@gmail.com",
              pass: "nqcj tpio szzo fccp",
            },
          });

          (async () => {
            const info = await transporter.sendMail({
              from: "boxerbaloch2211@gmail.com",
              to: email_address,
              subject: "Hello email sent",
              text:`✅ Event "${event_type}" booked for ${person_name} on ${event_date} at ${event_time} for ${number_of_guests} guests. We will contact you at ${email_address}.`, // plain‑text body
            //   html: "<b>Hello world?</b>", // HTML body
            });
          
            console.log("Message sent:", info.messageId);
          })();

        const responseMessage = `🎉 ${event_type} confirmed for ${number_of_guests} guests on 📅 ${event_date} at ⏰ ${event_time}.  

Our team at The Royal Spoon is preparing an experience where celebration meets sophistication ✨.`
;
        console.log("Sending event response:", responseMessage);
        agent.add(responseMessage);
    }

    // ======================


    function Wellcome(agent) {
        console.log("webhook failed");
        agent.add("Server is connect");
    }


    // Fallback Intent
    // ======================
    function fallback(agent) {
        console.log("Fallback triggered");
        agent.add("Sorry, I didn't understand that. Can you please repeat?");
    }

    // ======================
    // Intent Map
    // ======================
    let intentMap = new Map();
    intentMap.set('Book a Table', bookTable);
    intentMap.set('Book For Event', bookEvent);
    intentMap.set('Default Welcome Intent', Wellcome);
    intentMap.set('Default Fallback Intent', fallback);

    agent.handleRequest(intentMap);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});    









