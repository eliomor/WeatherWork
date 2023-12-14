import React, {useState, useEffect, useCallback} from 'react';
import {TextInput, View} from 'react-native';

import useDebounce from '~/hooks/useDebounce';
import SvgImage from '~/components/SvgImage';
import {icon_search_outline} from '~/assets/icons';

import {styles} from './SearchInput.styles';

interface SearchInputProps {
  onSearch: (location: string) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({onSearch}) => {
  const [location, setLocation] = useState<string>('');
  const debouncedLocation = useDebounce(location, 500);

  useEffect(() => {
    onSearch(debouncedLocation);
  }, [debouncedLocation, onSearch]);

  const handleChange = useCallback(
    (text: string) => {
      setLocation(text);
    },
    [setLocation],
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search ..."
        value={location}
        onChangeText={handleChange}
        autoCorrect={false}
        textAlign="left"
        style={styles.textInput}
      />
      <SvgImage xml={icon_search_outline} width={33} height={33} />
    </View>
  );
};

export default React.memo(SearchInput);
