from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path

# TODO: import the made View Classes and fill out the order patterns
# After that, import this in __init__.py for us to connect it in our
# main url (@Jan)
from ..views.tasks import (
	StoreTaskRetrieveAPIView,
	StoreTaskDetailView
	)


tasks_patterns = [
	re_path(
		'list/', 
		StoreTaskRetrieveAPIView.as_view(),
	),
	re_path(
		r'^(?P<pk>\d+)/details', 
		StoreTaskDetailView.as_view(),
	),
]

tasks_patterns = format_suffix_patterns(tasks_patterns)