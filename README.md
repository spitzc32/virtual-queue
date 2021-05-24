# Virtual Queue application

This is the project repo for the final requirements in Design Analysis Algorithms. It contains both the backend API and the frontend api side Dockerize along with its db, postgreSQL.

## Running

1. `docker-compose build`
1. `docker-compose up`
1. There should now be two servers running:
  - [http://127.0.0.1:5000](http://127.0.0.1:5000) is the Django app
  - [http://127.0.0.1:3000](http://127.0.0.1:3000) is the React app

## Setting up Account for Django superuser
after running the container go to docker desktop and click django-queue container. run its CLI then something like a cmd would pop up.

On CLI run command
`python manage.py shell`

Inside Python shell run command
`from accounts.models import Account`
`Account.objects.all()`

if account returns none:
`user = Account.objects.create(email='adminFinal@admin.com', password='admin1234')`

Creating Group for user permissions
```
from django.contrib.auth.models import Group, Permission
g = Group.objects.create(name='Admin')

for permission in Permissions.objects.all():
	g.permissions.add(permission)
```

Add group to user:
`user.group.add(g)`

After this setup, test admin and see if you can login to http://localhost:8000/admin/ and access the Models. 

## Using `docker-compose run` to issue one-off commands

If you want to run a one-off command, like installing dependencies, you can use the `docker-compose run <service_name> <cmd>`.

For example, to install a Javascript dependency and save that information to `package.json` we could run:
`docker-compose run --rm frontend npm install --save axios`

If you want to be on a shell for one of the Docker services, you can do something like:
`docker-compose run --rm frontend bash`



