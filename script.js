document.addEventListener('DOMContentLoaded', () => {
    let selectedTime;
    let initialSlots;

    // Function to open the pop-up form
    window.openPopup = (time, slots) => {
        selectedTime = time;
        initialSlots = slots;

        // Update slot count
        slots--;

        // Update the slot count inside the box
        const slotCountElement = document.getElementById(`${time}-slots`);
        if (slotCountElement) {
            slotCountElement.textContent = `${slots} slots available`;
        }

        const popupForm = document.getElementById('popup-form');
        popupForm.style.display = 'block';
    };

    // Function to submit a meeting
    window.submitMeeting = () => {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        const name = nameInput.value;
        const email = emailInput.value;

        // Validation: Ensure name and email are not empty
        if (name && email) {
            // Update the scheduled meetings section
            const scheduledMeetings = document.getElementById('scheduled-meetings');
            const meetingDetails = document.createElement('div');
            meetingDetails.className = 'meeting-details';

            meetingDetails.innerHTML = `
                <p>Hi ${name},</p>
                <p>Please join the meeting via this link at ${selectedTime}.</p>
                <button onclick="cancelMeeting(this, '${selectedTime}', ${initialSlots})">Cancel</button>
            `;

            // Append the new meeting details to the scheduled-meetings section
            scheduledMeetings.appendChild(meetingDetails);

            // Close the pop-up form
            closePopup();

            // Update the slot count inside the box when a meeting is scheduled
            const slotCountElement = document.getElementById(`${selectedTime}-slots`);
            if (slotCountElement) {
                const slotsAvailable = parseInt(slotCountElement.textContent.split(' ')[0]);
                slotCountElement.textContent = `${slotsAvailable - 1} slots available`;
            }

            // Optional: Clear the form fields
            nameInput.value = '';
            emailInput.value = '';
        } else {
            // Optional: Provide user feedback about empty fields
            alert('Please fill in both name and email fields.');
        }
    };

    // Function to cancel a meeting
    window.cancelMeeting = (button, time, initialSlots) => {
        const meetingDetails = button.parentElement;
        meetingDetails.remove();

        // Update the slot count inside the box when a meeting is canceled
        const slotCountElement = document.getElementById(`${time}-slots`);
        if (slotCountElement) {
            const slotsAvailable = parseInt(slotCountElement.textContent.split(' ')[0]);
            slotCountElement.textContent = `${slotsAvailable + 1} slots available`;
        }
    };

    // Function to close the pop-up form
    window.closePopup = () => {
        const popupForm = document.getElementById('popup-form');
        popupForm.style.display = 'none';
    };
});