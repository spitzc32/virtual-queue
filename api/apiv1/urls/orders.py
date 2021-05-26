from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path

# TODO: import the made View Classes and fill out the order patterns
# After that, import this in __init__.py for us to connect it in our
# main url (@Jan)
from ..views.orders import (
	OrderRetrieveAPIView,
	OrderDetailView
	)


order_patterns = [
	re_path(
		'list/', 
		OrderRetrieveAPIView.as_view(),
	),
	re_path(
		r'^(?P<pk>\d+)/details', 
		OrderDetailView.as_view(),
	),
]

order_patterns = format_suffix_patterns(order_patterns)