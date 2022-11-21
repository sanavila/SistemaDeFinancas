import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { InfoArea } from './components/infoArea';
import { TableArea } from './components/tableArea';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/item';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=> {
    setFilteredList( filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
    <C.Header>
      <C.HeaderText> Sistema Financeiro</C.HeaderText>
    </C.Header>
    <C.Body>
      <InfoArea 
      currentMonth={currentMonth}
      onMonthChange={handleMonthChange}
      />
      <TableArea list={filteredList}/>
    </C.Body>
    </C.Container>
  );
}

export default App;
