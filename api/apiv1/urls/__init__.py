from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include

from .accounts import account_patterns
from .store import (
	store_patterns,
	storebranch_patterns
	accountbranch_patterns
	)

app_name='api_v1'

urlpatterns = [
	path(
		'account/', 
<<<<<<< HEAD
		include(account_patterns),
		'store/', 
		include(store_patterns),
		'storebranch/', 
		include(storebranch_patterns),
		'accountbranch/', 
		include(accountbranch_patterns),
        'order/', 
        incanlude(order_patterns),
        'task/', 
        include(tasks_patterns),
=======
		include(account_patterns)
	),
	path(
		'store/', 
		include(store_patterns)
	),
	path(
		'storebranch/', 
		include(storebranch_patterns)
	),
	path(
		'accountbranch/', 
		include(accountbranch_patterns)
	),
	path(
        'order/', 
        include(order_patterns)
    ),
    path(
        'task/', 
        include(tasks_patterns)
>>>>>>> 5f4d26a (initial commit on urls/__init__.py and urls/store.py)
    ),
]
