from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import OrderViewSet

order_router = DefaultRouter()
order_router.register(r'orders', OrderViewSet) 

