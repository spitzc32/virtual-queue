from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include

from .accounts import account_patterns
from .orders import order_patterns
from .tasks import tasks_patterns
from .store import store_patterns

app_name='api_v1'

urlpatterns = [
	path(
		'account/',
		include(account_patterns),
	),
	path(
		'store/',
		include(store_patterns),
	),
	path(
		'order/',
		include(order_patterns),
	),
	path(
		'tasks/',
		include(tasks_patterns)
	)
]
