import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GQLQuery } from "../schemaTypes";
import { Table } from "semantic-ui-react";

const ALL_PERSONS = gql`
  query {
    allPersons(first: 5) {
      name
      homeworld {
        name
      }
      height
    }
  }
`;

export const StartWars = () => {
  const renderRow = (name?: string, title?: string, height?: number) => (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{height}</Table.Cell>
    </Table.Row>
  );

  const { data } = useQuery<GQLQuery>(ALL_PERSONS);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ margin: "7vh 5vw 5vh 5vw" }}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>hairColor</Table.HeaderCell>
            <Table.HeaderCell>birthYear</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {data.allPersons.map((person) =>
          renderRow(
            person.name,
            person.homeworld?.name,
            person.height || undefined
          )
        )}
        <Table.Body></Table.Body>
      </Table>
    </div>
  );
};
