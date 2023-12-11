# RedwoodJS Email Application

Small application that demonstrates email mailing functionality.

Also compiles a list of emails sent.

## How to use

Start by installing dependencies:

```
yarn install
```

Create a free account on brevo for mailer setup
- go to smtp/api and create a new key
- in .env file add it in there (can call it SEND_IN_BLUE_KEY)

change the from email to your own in 'api/src/lib/email.ts'

Then start the development server:

```
yarn redwood dev
```

add a user with an actual email address that you can check and receive emails at

then click send email