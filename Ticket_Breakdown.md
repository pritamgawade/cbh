# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

#Ticket 1
Title: Add column to facilities table
Description:
Currenlty we are using internal database id to generate reports of each agent, now add new column agent_ref_id to facilities table to save agent ids for each agent

Acceptance criteria:
dev, QA, prod
agent_ref_id is successfully created

Estimate: 2 hrs

#Tikcet 2
Title: Add foreign key relation to shifts table
Description:
Add agent_ref_id as foreign key to shifts table to get shifts specific to agents

Acceptance criteria:
dev, QA, prod
agent_ref_id is successfully created

Estimate: 2 hrs

#Ticket 3
Title: Update getShiftsByFacility and generateReport functions to use agent_ref_id
Description:
Update existing queries and functions to use agent_ref_id

Acceptance criteria:
dev, QA, prod
New agent_ref_id should be used instead of internal database id

Estimate: 4 hrs

#Ticket 4
Title: Tests

Description:
unit, manual and integration tests

Estimate: 4 hrs

#Ticket 5
Title: Deploy to DEV, QA and PROD

Acceptance criteria:
Devops should deploy the feature in all the environments and make sure ll environments are running successfully.
