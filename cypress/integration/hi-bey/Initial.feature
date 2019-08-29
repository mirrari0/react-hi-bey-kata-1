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

  @focus
  Scenario: Click request button will display a table of Car Data
    Given I open Home page
    When I click the "Request Vehicle Counts" button
    Then I see a table of "Vehicle Data" with a column "Make"
    And I see a table of "Vehicle Data" with a column "Model"
    And I see a table of "Vehicle Data" with a column "Model Year"
    And I see a table of "Vehicle Data" with a column "Model Body"
    And I see a table of "Vehicle Data" with a column "Model Drive"
    And I see a table of "Vehicle Data" with a column "Model Transmission Type"
    And I see a table of "Vehicle Data" with a column "Model Doors"
    And I see a table of "Vehicle Data" with a column "Make Country"
    And I see a table of "Vehicle Data" with a column "Engine Fuel Type"
    And I see a table of "Vehicle Data" with a column "Count"


