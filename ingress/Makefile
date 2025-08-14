apply:
	kubectl apply -f app-deployment.yaml
	kubectl apply -f app-service.yaml
	kubectl apply -f redis-deployment.yaml
	kubectl apply -f redis-service.yaml

delete:
	kubectl delete -f app-deployment.yaml
	kubectl delete -f app-service.yaml
	kubectl delete -f redis-deployment.yaml
	kubectl delete -f redis-service.yaml

.PHONY: apply delete