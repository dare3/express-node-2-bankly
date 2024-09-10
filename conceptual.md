### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
A JSON Web Token (JWT) is a compact, URL-safe token used to represent claims between a client and a server. It is commonly used for authenticationand exhange of data. JWTs consist of three parts: a header(Alogrithm and token), a payload(data) and a signature.

- What is the signature portion of the JWT?  What does it do?
The signature portion of a JWT is used to verify the integrity of the token and to ensure that its contents (header and payload) have not been tampered with. It is created by taking the encoded header and payload, signing them with a secret key or a private key  and encoding the result. The signature ensures the token's authenticity and helps prevent unauthorized access.


- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, if a JWT is intercepted, the attacker can see what's inside the payload because it is only base64-encoded, not encrypted. This means the payload is easily decoded and viewable. However, the attacker cannot alter the payload without invalidating the signature, which is protected by a secret key or private key.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

User Authentication: The user post their credentials such as: username and password to the server.
Token Generation: If credentials are valid, the server generates a JWT containing user data and signs it with a secret key.
Token Storage: The client get the JWT and stores it either in local storage or as a cookie.
Token Usage: For other requests, the client includes the JWT in the authorization header.
Token Verification: The server verifies the token's signature to authenticate the user and, if valid, processes the request.

- Compare and contrast unit, integration and end-to-end tests.
Unit Tests: Test individual units or components in isolation to ensure they function correctly. They are fast and help catch bugs early.

Integration Tests: Test the interaction between multiple components or units to ensure they work together as expected. They are slower than unit tests and help catch issues in how components integrate.

End-to-EndTests: Test the whole application flow from the user's perspective, using real-world instances. They are the slowest but provide the most confidence in the system's behavior.


- What is a mock? What are some things you would mock?

A mock is a simulated object that mimics the behavior of real objects in a controlled way. Mocks are used in testing to isolate the unit being tested and avoid dependencies on external components like databases, APIs, or other services.

Examples of things you would mock include: Database queries, HTTP requests and responses and External APIs.

- What is continuous integration?

Continuous Integration (CI) is a development practice where code changes are automatically tested and integrated into the main branch frequently, often several times a day. CI helps detect and fix errors quickly, improves code quality, and ensures that the software is always in a releasable state. It typically involves automated testing, building, and integration of code.

- What is an environment variable and what are they used for?

An environment variable is a key-value pair used to configure application behavior without hardcoding settings into the code. They are used to store configuration settings like database credentials, API keys, port numbers, and other sensitive or environment-specific information. Environment variables help make applications portable and more secure by keeping sensitive data out of the source code.

- What is TDD? What are some benefits and drawbacks?

Test-Driven Development (TDD) is a software development approach where tests are written before the code itself. The process follows a life-cycle of writing a failing test, implementing code to pass the test, and then refactoring the code.

Benefits:
Improves code quality and design.
Encourages writing only the necessary code to pass tests.
Reduces bugs and ensures better test coverage.
Drawbacks:
Can be time-consuming initially.
Requires discipline and a good understanding of testing principles.
May be challenging for complex or evolving requirements.

- What is the value of using JSONSchema for validation?

JSONSchema provides a structured way to define and validate the format, structure, and data types of JSON data. It ensures that the data adheres to a predefined format, making it useful for input validation, API contract enforcement, and preventing data-related bugs. JSONSchema helps improve data quality, reduces errors, and provides clear validation error messages.

- What are some ways to decide which code to test?

Critical Paths: Focus on areas that are crucial to the application's functionality.
Complexity: Test complex algorithms, business logic, or code with many conditions.
High Risk: Test code that is prone to failure or has caused issues in the past.
Edge Cases: Test scenarios that are outside normal operating conditions.
Core Features: Ensure that the main features work as expected.

- What does RETURNING do in SQL? When would you use it?

The RETURNING clause in SQL allows you to return values from rows affected by an INSERT, UPDATE, or DELETE statement. It is useful when you need immediate access to the modified data, such as getting the newly generated primary key after an insert or checking updated fields without an additional SELECT query.

- What are some differences between Web Sockets and HTTP?

Web Sockets: Provides a full-duplex, bidirectional communication channel over a single, long-lived connection. It is ideal for real-time applications like chat apps, live updates, and gaming.
HTTP: A request-response protocol where the client initiates requests and the server responds. It is stateless and suitable for one-time, short-lived connections.

- Did you prefer using Flask over Express? Why or why not?

 using Flask and Express depends on various factors such as the type of project(s) to work on

Flask:

Lightweight and simple, great for small to medium-sized Python applications.
Provides more control with minimal abstraction, making it ideal for customized solutions.
Best for Python-centric stacks.

Express:

Flexible, minimalist framework widely used in Node.js environments.
Better suited for JavaScript stacks, making it easier for full-stack JavaScript developers.
Larger ecosystem with middleware options.

From the above analysis; i prefer Express for a large project while flask for a simple logic project.
