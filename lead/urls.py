from lead.api.apiViews import LeadViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('api/leads', LeadViewset, basename='lead')
urlpatterns = router.urls
