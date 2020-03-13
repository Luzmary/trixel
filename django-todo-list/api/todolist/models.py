from django.db import models

# Create your models here.
from django.db import models


# Create your models here.

class TodoList(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    status = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name