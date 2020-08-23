import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GQLQuery } from "./schemaTypes";
import { Table } from "semantic-ui-react";

const QUERY = gql``;

export const StartWars = () => {
  const renderRow = (name?: string, title?: string, height?: number) => (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{height}</Table.Cell>
    </Table.Row>
  );

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
        <Table.Body>{/* 中身 */}</Table.Body>
      </Table>
    </div>
  );
};
