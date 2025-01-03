from django.db import models

class Order(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    order = models.TextField()

    def __str__(self):
        return f"{self.name}'s order on {self.date}"