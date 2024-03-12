import React, { FC } from 'react';
import {
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Colors } from '../../design/Colors';
import { getHexAlphaValue } from '../../shared/utils/getHexAlphaValue';
import { ProgressiveImage } from '../../shared/components/ProgressiveImage';
import { ScreenProps } from '../../navigation/types/ScreenProps';
import { ScreenWrap } from '../../shared/components/ScreenWrap';
import { Spacing } from '../../shared/components/Spacing';
import { Text } from '../../shared/components/Text';
import { GOLDEN_RATIO } from '../../shared/constants';

import { TagChips } from '../components/TagChips';
import { useFetchWorkshop } from '../hooks/useFetchWorkshop';
import { VideoDurationChip } from '../components/VideoDurationChip';
import { WorkshopDetails } from '../types/Workshop';

export const WorkshopDetailsScreen: FC<ScreenProps<'WorkshopDetailsScreen'>> = (props) => {
  const { route } = props;
  const { workshopId } = route.params;

  const { workshop, isRefetching, isError } = useFetchWorkshop({ workshopId });

  return (
    <ScreenWrap containerStyle={styles.container} edges={['bottom']}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={isRefetching} colors={[Colors.Salmon]} />}>
        {!!isError && (
          <Text color={Colors.MadderLake} center>
            {'An error occurred while fetching workshop details'}
          </Text>
        )}

        {!!workshop && <WorkshopDetailsContent workshop={workshop} />}
      </ScrollView>
    </ScreenWrap>
  );
};

const WorkshopDetailsContent: FC<{ workshop: WorkshopDetails }> = (props) => {
  const { workshop } = props;
  const { title, thumbnail: uri, tags, content, duration } = workshop;

  return (
    <React.Fragment>
      <View style={styles.subContainer}>
        <Text size={21} weight="600" marginTop={8}>
          {title}
        </Text>

        <TagChips tags={tags} />
      </View>

      <Spacing size={16} />

      <TouchableOpacity onPress={onPlayVideo}>
        <ProgressiveImage source={{ uri }} style={styles.thumbnail} hideActivityIndicator />
        <View style={styles.playButtonWrap}>
          <View style={styles.playButton}>
            <Text weight="700" color={Colors.White}>
              {'Play ▶️'}
            </Text>
          </View>
        </View>
        <VideoDurationChip duration={duration} />
      </TouchableOpacity>

      <View style={styles.subContainer}>
        {content.map(({ id, title: sectionTitle, description }) => (
          <React.Fragment key={id}>
            <Text size={18} weight="600" marginTop={16}>
              {sectionTitle}
            </Text>

            <Text
              style={styles.desc}
              color={Colors.RaisinBlack + getHexAlphaValue(75)}
              size={14}
              marginTop={8}>
              {description}
            </Text>
          </React.Fragment>
        ))}
      </View>

      <Spacing size={16} />
    </React.Fragment>
  );
};

const onPlayVideo = () => Alert.alert('Play video', 'This is a placeholder for playing video.');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  thumbnail: {
    width: '100%',
    height: undefined,
    aspectRatio: GOLDEN_RATIO,
  },
  subContainer: {
    paddingHorizontal: 16,
  },
  desc: {
    textAlign: 'justify',
    lineHeight: 22,
    letterSpacing: 0.2,
  },
  playButtonWrap: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: Colors.Black + getHexAlphaValue(80),
    paddingHorizontal: 16,
    borderRadius: 8,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
