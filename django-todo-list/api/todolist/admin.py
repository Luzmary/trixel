from django.contrib import admin
from .models import TodoList

# Register your models here.
class TodolistAdmin(admin.ModelAdmin):
      list_display = ('name', 'description', 'status','created_at')

# Register your models here.
admin.site.register(TodoList, TodolistAdmin)