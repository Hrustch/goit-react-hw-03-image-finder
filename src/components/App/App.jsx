import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Header, Section, Container, Text } from 'components';
import { Gallery } from 'tabs';

export const App = () => {
  return (
    <>
      <Header />

      <Section>
        <Container>
          <Tabs>
            
            <TabList>
              <Tab>
                <Text>Gallery</Text>
              </Tab>              
            </TabList>

            <TabPanel>
              <Gallery />
            </TabPanel>
  
          </Tabs>
        </Container>
      </Section>
    </>
  );
};
