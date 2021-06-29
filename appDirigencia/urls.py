from django.urls import path

from .views import dirigencia

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('dirigencia/', dirigencia, name='dirigencia'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)