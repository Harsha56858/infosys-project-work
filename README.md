# Community Emergency Response Portal

React/Vite frontend for the Community Emergency Response Portal and its Django
backend in the sibling `Web-Based-Community-Emergency-Response-System-clean -82`
project.

## Start the application

Install frontend dependencies once with `npm install`, then run
`start_all.bat` to start Django on port 8001 and Vite on port 5173. The frontend
proxies `/api` and `/alerts` requests to Django, so browse to
<http://localhost:5173/> and sign in with a backend account.

You can also start the services separately with `start_backend.bat` and
`start_frontend.bat`. Keep both terminal windows open. Django must be listening
on port 8001 for sign-in and backend data to work.

The sign-in page provides five demo accounts (resident, guardian, volunteer,
security, and admin), all using the demo password `pass123`. If the accounts are
not in the database yet, run `python seed_demo_users.py` from the sibling Django
project directory to create or update them.

The backend uses Django session cookies. The frontend sends requests with
credentials enabled and forwards the CSRF cookie on write requests.

## Responder workflow

Security and Admin users can assign Security or Volunteer accounts to an open
incident from its detail page. An assigned responder can check in only when the
device GPS location is within 500 meters of the SOS coordinates. Incidents
without GPS coordinates cannot use on-site check-in. After a responder checks
in, the reporting resident can confirm arrival from the SOS status or incident
detail page; this confirmation does not resolve or close the incident.

From the sibling Django backend directory, apply database migrations after
updating the backend:

```powershell
python manage.py migrate
```
