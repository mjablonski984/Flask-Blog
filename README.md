# Flask Blog

>A simple blog with login system created to learn basic functionalities of Flask web framework.

Main packages used in the process:

- Flask modules: Flask-Login, Flask-Mail, Flask-WTF, Flask-Bcrypt
- WTForms
- SQLAlchemy (with PostgreSQL database)


## Quick Start

```bash
# Add your DATABASE URI in app.py and your mail params in send_mail.py

# Install dependencies
pipenv shell
pipenv install

# Serve on localhost:5000
python app.py
```
You can try this app [here](https://flaskblogmj.herokuapp.com/)