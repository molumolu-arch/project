from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:pk>/', views.ProductDetailView.as_view()),
    path('order/', views.create_order),
    path('my-orders/', views.UserOrdersView.as_view()),
    path('categories/', views.category_list),
    path('products/category/<int:category_id>/', views.product_list_by_category),  
]