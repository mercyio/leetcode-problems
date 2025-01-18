Your task is to implement a simple container of integer numbers. As a first step, consider implementing the following two operations:

ADD <value> should add the specified integer value to the container. Returns an empty string.
EXISTS <value> should check whether the specific integer value exists in the container. Returns "true" if the value exists, "false" otherwise.
The container is supposed to be empty at the beginning of execution.

Given a list of queries, return the list of answers for these queries.


The next step is to support removal from the container:

REMOVE <value> should remove a single occurrence of the specified value from the container. If the value has multiple occurrences, only one of them should be removed.
Previous level functionality should remain the same. To pass to the next level you have to pass all tests at this level.

Given a list of queries, return the list of answers for these queries.



The next step is to support the operation for finding the nearest integer in the container greater than the provided one:

GET_NEXT <value> should return the minimal integer in the container that is strictly greater than the provided value. In case there is no such integer in the container, return empty string.
Previous levels functionality should remain the same. To pass to the next level you have to pass all tests at this level.

Given a list of queries, return the list of answers for these queries.