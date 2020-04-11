# ZPI_AuthServer
Repo for ZPI Auth Server, containts Front and Back. 

# Firstly you need to install pipenv
```terminal
$ pip install pipenv
```

# After that to make sure u installed pipenv correctly
```terminal
$ pipenv
```
# Answear
```
Usage: pipenv [OPTIONS] COMMAND [ARGS]...

Options:
  --where             Output project home information.
  --venv              Output virtualenv information.
  --py                Output Python interpreter information.
  --envs              Output Environment Variable options.
  --rm                Remove the virtualenv.
  --bare              Minimal output.
  --completion        Output completion (to be eval'd).
  --man               Display manpage.
...

```
# .env file example
```
# Flask Settings
SECRET_KEY = $ YOUR APP SECRET KEY $
TESTING=True
FLASK_ENV=Deveopment

# Flask-sqlalchemy settings
SQLALCHEMY_DATABASE_URI= $ YOUR PATH TO DATABASE $
SQLALCHEMY_TRACK_MODIFICATIONS=True
SQLALCHEMY_ECHO="debug"

# superuser credits
superuser_nickname = "superuser"
superuser_email = "superuser@gmail.com"
superuser_password = "admin123"


private_key = $ YOUR PRIVATE KEY $

public_key = $ YOUR PUBLIC KEY $
