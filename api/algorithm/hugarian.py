import numpy as np

from accounts.model import AccountBarcode
from orders.model import Order
from tasks.model import StoreTask

from datetime import date, timedelta

class HungarianAlgo():
	def __init__(self):
		self.accounts = Account.objects.filter()
		self.orders = Order.objects.filter(created_time__gte=date.today())
		self.workers = StoreTask.objects.filter(created_time__gte=date.today())
		self.cost_table = []

	def prep_weight(self):
		"""
		TODO: Prepare the weights needed to build our cost table
		"""
		pass

	def prep_cost(self):
		"""
		TODO: prepare the cost table for the current hour queue
		"""
		pass

	def write_storage(self):
		"""
		TODO: this will serve as the write component for the queue for 
		today's serving queue in a particular hours. Do a file write/append 
		to save computation time in queue management 
		"""
		pass


	def read_storage(self):
		"""
		TODO: this will serve as the write component for the queue for 
		today's serving queue in a particular hour. Do a file write/append
		to save computation time in queue management 
		"""
		pass

	def out_prep(self):
		"""
		TODO: this will serve as the main component where the sole operation
		is to be held. Do the Algorithm serving here.
		"""
		pass

