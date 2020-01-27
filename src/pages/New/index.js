import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native'
import { TextInput, Title, Button } from 'react-native-paper'
import NumericInput from '@wwdrew/react-native-numeric-textinput'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

import {
  Container,
  HeaderText,
  BoxHeader,
  BoxInput,
  styles,
  BoxButtons,
  DisplayDate,
  TextDate,
  Picker,
  BorderPicker
} from './styles';
import commomStyles from '../../styles'

function Header() {
  return (
    <BoxHeader>
      <HeaderText>Nova transação</HeaderText>
    </BoxHeader>
  )
}

const repeatData = [{ value: 'Nunca' }, { value: 'Mensalmente' }]
const finishData = [{ value: 'Indefinidamente' }, { value: '6 meses' }, { value: '1 anual' }]

export default function New({ navigation }) {
  const [value, setValue] = useState(0)
  const [statusButton, setStatusButton] = useState(0)
  const [date, setDate] = useState(new Date(Date.now()))
  const [showCalendar, setShowCalendar] = useState(false)
  const [repeat, setRepeat] = useState('Nunca')

  function handleChangeDate(evt, newDate) {
    if (!newDate) newDate = date
    setDate(newDate)
    setShowCalendar(false)
  }

  return (
    <ScrollView>
      <Container>
        {showCalendar &&
          <DateTimePicker
            value={date}
            is24Hour={true}
            display="default"
            onChange={handleChangeDate}
          />
        }
        <BoxInput>
          <Title>Nome da transação</Title>
          <TextInput
            placeholder='Crie um nome para a transação'
            selectionColor={commomStyles.colors.secundary}
            style={styles.TextInput}
            autoCompleteType='off'
          />
        </BoxInput>
        <BoxInput>
          <Title>Valor</Title>
          <TextInput
            render={props =>
              <NumericInput
                {...props}
                type='currency'
                locale='pt-br'
                currency='BRL'
                value={value}
                onUpdate={(value) => setValue(value)}
                style={[styles.CurrencyInput, statusButton === 1 && styles.colorDanger]}
              />
            }
            placeholder='Qual valor da transação'
            selectionColor={commomStyles.colors.secundary}
            autoCompleteType='off'
            keyboardType='decimal-pad'
            value={value}
          />
        </BoxInput>

        <BoxButtons>
          <Button
            mode={statusButton === 0 ? 'contained' : "outlined"}
            style={styles.Button}
            onPress={() => setStatusButton(0)}>
            R$
        </Button>
          <Button
            mode={statusButton === 1 ? 'contained' : "outlined"}
            style={styles.Button}
            onPress={() => setStatusButton(1)}>
            -R$
        </Button>
        </BoxButtons>

        <BoxInput>
          <Title>Data</Title>
          <DisplayDate onPress={() => setShowCalendar(true)}>
            <TextDate>{moment(date).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}</TextDate>
          </DisplayDate>
        </BoxInput>

        <BoxInput>
          <Title>Repete</Title>
          <BorderPicker>
            <Picker
              mode='dropdown'
              selectedValue={repeat}
              onValueChange={(itemValue) => setRepeat(itemValue)}>
              {repeatData.map(item => <Picker.Item key={item.value} label={item.value} value={item.value} />)}
            </Picker>
          </BorderPicker>
        </BoxInput>

        {repeat !== "Nunca" &&
          <BoxInput>
            <Title>Termina em</Title>
            <BorderPicker>
              <Picker
                mode='dropdown'
                selectedValue={repeat}
                onValueChange={(itemValue) => setRepeat(itemValue)}>
                {finishData.map(item => <Picker.Item key={item.value} label={item.value} value={item.value} />)}
              </Picker>
            </BorderPicker>
          </BoxInput>
        }

        <BoxInput>
          <Title>Categoria</Title>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <BorderPicker>
              <Picker
                mode='dropdown'
                onValueChange={() => alert('teste')}
                selectedValue=''
                onValueChange={(itemValue) => setRepeat(itemValue)}>
              </Picker>
            </BorderPicker>
          </TouchableOpacity>
        </BoxInput>

      </Container>
    </ScrollView >
  );
}


New.navigationOptions = {
  headerTitle: Header
}