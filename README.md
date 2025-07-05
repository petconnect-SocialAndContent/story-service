# Story Service

Microservicio para gestionar historias efímeras en PetConnect.

## Endpoints

| Método | Ruta                      | Descripción                                |
|--------|---------------------------|--------------------------------------------|
| POST   | /api/v1/stories           | Crear nueva historia                       |
| GET    | /api/v1/stories/:user_id  | Obtener historias activas de un usuario    |
| DELETE | /api/v1/stories/:id       | Eliminar historia manualmente              |

## Variables de entorno

- `PORT`
- `MONGODB_URI`
- `JWT_SECRET`

## Docker

```bash
docker build -t story-service .
docker run --env-file .env -p 3021:3021 story-service
