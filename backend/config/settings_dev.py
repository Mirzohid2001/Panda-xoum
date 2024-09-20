DEBUG = True

import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

SMS_CODE_ACTIVE = False
ESKIZ_TOKEN = ''
MAPS_API_KEY = ''

EMAIL_HOST = 'smtp.sendgrid.net'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'apikey'
EMAIL_HOST_PASSWORD = ''  # SendGrid API Key
SERVER_EMAIL = EMAIL_HOST_USER
DEFAULT_FROM_EMAIL = ''
