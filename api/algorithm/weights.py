from datetime import datetime
import numpy as np

from associates.models import (
    AccountStoreBranch,
    BranchOpening
)
from store.models import StoreBranch
from accounts.models import Account, AccountBarcode
from orders.models import Order

from .hungarian import Hungarian

class Weights():
    """
    Implementation of the Weights for the Hungarian Algorithm
    using numpy and Django's ORM framework.

    Usage
    -----
        from algorithm.weights import Weights

        weights = Weights(hour)
        weights.calculate()

    Get results and total potential after calculation:
        weighted_matrix = weights.get_weights()
    """
    def __init__(self, hour):
        self.date = datetime.now().date()
        self.hour = hour
        self.branch = StoreBranch.objects.get(id=2)
        self.emp_weights = []
        self.init_weights = []
        self.weights = []
        self.queue_sub_weights = {
            'small': 1,
            'medium': 3,
            'large': 5,
        }
        self.employees = []
        self.orders = []

    def get_weights(self):
        return self.weights

    def get_employee_numbers(self):
        return len(self.employees)

    def get_order_length(self):
        return len(self.orders)

    def set_employees(self):
        task_qs = BranchOpening.objects.filter(
            created_time__gte=self.date,
        ).first()

        self.employees = [i for i in task_qs.workers.all()]

    def set_orders(self):
        order_qs = Order.objects.filter(
            store_branch=self.branch.id,
            created_time__gte=self.date,
            queue_hour=self.hour,
        )

        self.orders = order_qs

    def set_order_weights(self):
        for order in self.orders:
            sub = self.queue_sub_weights[order.queue_sub]
            dist = self.get_dist(order.latitude,
                                 order.longitude,
                                 self.branch.latitude,
                                 self.branch.longitude)
            self.init_weights.append((sub,dist))

    def set_emp_weights(self):
        for emp in self.employees:
            li = []
            for order in self.orders:
                if order.queue_sub == 'small':
                    est = emp.account.small_estimate
                    li.append(est)
                elif order.queue_sub == 'medium':
                    est = emp.account.medium_estimate
                    li.append(est)
                else:
                    est = emp.account.large_estimate
                    li.append(est)
            self.emp_weights.append(li)



    def get_dist(self, lat1, lon1, lat2, lon2):
        lon1, lat1, lon2, lat2 = map(np.radians, [lon1, lat1, lon2, lat2])

        dlon = lon2 - lon1
        dlat = lat2 - lat1
        a = np.sin(dlat / 2.0) ** 2 + np.cos(lat1) * np.cos(lat2) * np.sin(dlon / 2.0) ** 2
        c = 2 * np.arcsin(np.sqrt(a))
        km = 6367 * c
        return km

    def calculate(self):
        self.set_employees()
        self.set_orders()
        self.set_order_weights()
        self.set_emp_weights()
        init_weights = np.array([emp + np.array([int(weight[0] + weight[1]) for weight in self.init_weights]) for emp in self.emp_weights])

        if (len(init_weights) > 0):
            weights = np.array([])
            for i in range(0, self.get_order_length(), 2):
                weights = np.append(weights, init_weights)
            weights = weights.reshape(self.get_order_length(), self.get_order_length())
            hungarian = Hungarian(weights, is_profit_matrix=True)
            hungarian.calculate()
            self.weights = hungarian.get_results()
        else:
            self.weights = []




