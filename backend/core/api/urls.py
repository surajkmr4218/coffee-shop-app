from rest_framework.routers import DefaultRouter
from orders.api.urls import order_router
from django.urls import path, include

router = DefaultRouter()
# orders
router.registry.extend(order_router.registry)

urlpatterns = [
    path('', include(router.urls)), # try writing 'api' for path() argument if not working
]
