import React from 'react';

export default function Table() {
  return (
    <>
      <table border={1} width="100%" cellPadding={6} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Заголовок</th>
            <th>Описание</th>
          </tr>
        </thead>
      </table>
    </>
  );
}
