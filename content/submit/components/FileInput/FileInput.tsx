import React from 'react';
import { Pressable, View, Text } from 'react-native';
import * as DocumentPicker from "expo-document-picker";
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../../common/constants/colors';
import FileGroup from './FileGroup';

interface FileInputProps {
    imageFiles: File[],
    audioFiles: File[],
    onFilesAdded: (imageFiles: File[], audioFiles: File[]) => void;
    onFileRemoved: (fileName: string) => void;
}

export const FileInput = ({ imageFiles, audioFiles, onFilesAdded, onFileRemoved }: FileInputProps) => {
    const handleAddFilesPress = async () => {
      try {
        const docRes = await DocumentPicker.getDocumentAsync({
          type: "audio/*",
          multiple: true
        });
  
        const assets = docRes.assets;
        if (!assets) return;

        const existingFiles = [...imageFiles.map(file => file.name), ...audioFiles.map(file => file.name)];
        const newImageFiles: File[] = assets.filter(
              asset => 
                  asset.mimeType?.includes('image') &&
                  asset.file !== undefined &&
                  existingFiles.includes(asset.file.name)
          ).map(asset => asset.file!);
        const newAudioFiles: File[] = assets.filter(
              asset =>
                  asset.mimeType?.includes('audio') &&
                  asset.file !== undefined &&
                  existingFiles.includes(asset.file.name)
          ).map(asset => asset.file!);

        onFilesAdded(newImageFiles, newAudioFiles);
      } catch (error) {
        console.log("Error while selecting file: ", error);
      }
    };
    return (
        <View className='flex flex-col'>
            <Pressable onPress={handleAddFilesPress}>
                <View className='flex flex-row justify-center items-center border border-white rounded-lg border-opacity-80'>
                    <View className='flex justify-center items-center p-2'>
                        <Ionicons name='cloud-upload-outline' size={28} color={colors.wbGreen} />
                    </View>
                    <View className='flex flex-col p-2'>
                        <Text className='text-white text-lg font-secondaryBold w-full text-center'>Press here to add</Text>
                        <Text className='text-white text-lg font-secondaryBold mb-2 w-full text-center'>album art and song files</Text>
                        <Text className='text-white font-secondaryBold mb-2 w-full text-center'>Max 20 files - .mp3 .wav .png or .jpeg</Text>
                    </View>
                </View>
            </Pressable>
            <FileGroup groupName='Album Art' files={imageFiles} onRemoveFile={onFileRemoved} />
            <FileGroup groupName='Audio Files' files={audioFiles} onRemoveFile={onFileRemoved} />
        </View>
    )
}

export default FileInput;