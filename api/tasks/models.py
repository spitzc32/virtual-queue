from django.db import models

from core.models import BaseModel
from store.models import StoreBranch

class StoreTask(BaseModel):
    """
    Store task model is the model for daily updates to how
    many workers, the store capacity and the opening hours
    due to the pandemic.

    Inherited
    ---------
        BaseModel : class obj
            Model intended for basic specification details
    """

    store_branch = models.ForeignKey(to=StoreBranch, on_delete=models.CASCADE)
    no_workers = models.IntegerField(default=0)
    capacity = models.IntegerField(default=0)
    opening_hours = models.CharField(max_length=55)

    def __str__(self):
        return "{}- {}".format(self.store_branch.branch, self.opening_hours)
