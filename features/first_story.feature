Feature: abc
    
    Scenario Outline: first scenario
        Given username is "demo"
        And my pincode is "<pin>"
        When I request for my place name
        Then response is successful

        Examples:
            |pin|
            |72712|
            |72712|