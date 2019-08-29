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
    Then I see a table of "Vehicle Data" with a column header "Make"
    And I see a table of "Vehicle Data" with a column header "Model"
    And I see a table of "Vehicle Data" with a column header "Model Year"
    And I see a table of "Vehicle Data" with a column header "Model Body"
    And I see a table of "Vehicle Data" with a column header "Model Drive"
    And I see a table of "Vehicle Data" with a column header "Model Transmission Type"
    And I see a table of "Vehicle Data" with a column header "Model Doors"
    And I see a table of "Vehicle Data" with a column header "Make Country"
    And I see a table of "Vehicle Data" with a column header "Engine Fuel Type"
    And I see a table of "Vehicle Data" with a column header "Count"

  @focus
  Scenario: Click request button will display a table of known car data
    Given I open Home page
    When I click the "Request Vehicle Counts" button
    Then I see a value of "Honda" in column "Make" and row 1
    And I see a value of "Civic" in column "Model" and row 1
    And I see a value of "2016" in column "Model Year" and row 1
    And I see a value of "Si" in column "Model Body" and row 1
    And I see a value of "FWD" in column "Model Drive" and row 1
    And I see a value of "Manual" in column "Model Transmission Type" and row 1
    And I see a value of "2" in column "Model Doors" and row 1
    And I see a value of "Japan" in column "Make Country" and row 1
    And I see a value of "Regular Unleaded" in column "Engine Fuel Type" and row 1
    And I see a value of "282828" in column "Count" and row 1
