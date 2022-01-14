import merge from 'lodash.merge';
import { Theme } from '@mui/material/styles';
import Link from './Link';
import Lists from './Lists';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Skeleton from './Skeleton';
import Checkbox from './Checkbox';
import Container from './Container';
import Typography from './Typography';
import LoadingButton from './LoadingButton';

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Link(theme),
    Input(theme),
    Lists(theme),
    Paper(theme),
    Button(theme),
    Checkbox(theme),
    Skeleton(theme),
    Container(theme),
    Typography(theme),
    LoadingButton(theme)
  );
}
