# Task-manager
The task-manager app is a powerful and user-friendly tool for managing and organizing tasks
and activities. The app's endpoints enable users to create, update, and delete tasks, as well as
view and manage their task lists. Users can also upload and delete their avatar images, and
view their profile information, including their name, email address, and avatar image. The app
uses JSON Web Tokens (JWT) for authentication, ensuring that only authorized users canaccess the app's features and functionality. The app sends email for welcoming the user when
app is created.

"-" means that you have to fill with your own parameters
{{url}} means that you have to provide url depending on your env.
Endpoints

1. Create User -> For Creating User

{{url}}/users

In body we pass following parameters:
{
    "name" : "-",
    "email" : "-",
    "password" : "-"
}

2. Login User -> For Loging in as a user
{{url}}/users/login

{
    "email" : "-",
    "password" : "-"
}

3. Logout User -> For logging out user

4. Logout All User -> FOr logging out user from every device it has logged in.

5. Create Task -> For creating a task as a user after login

{{url}}/tasks
{
    "description" : "fourth",
    "completed" : false (Optional deafult value is false)
}

6. Read Profile -> for viewing profile

{{url}}/users/me 

7. Read Tasks -> for viewing task

{{url}}/tasks?sortBy=createdAt:asc

8. Update user -> for updating user
{{url}}/users/me

Body Parameters:
{
    "name" : "-",
    "age" : "-",
    "email" : "-",
    "password" : "-"
}

9. Update Task -> For updating task by ID
{{url}}/tasks/{id}

Body Parameters:
{
    "completed" : true or false
}

10. Delete User - For deleting self user from database.
{{url}}/users/me

11. Delete Task - For deleting individual task
{{url}}/tasks/638223b61cde365f93f0cc35

12. Upload Avatar - for uploading avatar

{{url}}/users/me/avatar

Body Parameter: Body -> form-data -> avatar - profile-pic.jpg

13. Delete Avatar -> for deleting avatar
{{url}}/users/me/avatar


