Feature: Initial Screen

  I want to open the webpage

@focus
Scenario: Opening the webpage
  Given I open Home page
  Then I see "Home" in the title

@focus
Scenario: Request Button Exists on Page
  Given I open Home page
  Then I see a button named "Request Vehicle Counts"