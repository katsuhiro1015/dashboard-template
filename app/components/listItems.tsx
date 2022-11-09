import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SecurityIcon from '@mui/icons-material/Security'
import SettingsIcon from '@mui/icons-material/Settings';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import BarChartIcon from '@mui/icons-material/BarChart';
import ConstructionIcon from '@mui/icons-material/Construction';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component="a" href="./Infrastructure">
      <ListItemIcon>
        <ConstructionIcon />
      </ListItemIcon>
      <ListItemText primary="環境構築" />
    </ListItemButton>
    <ListItemButton component="a" href="./Backup">
      <ListItemIcon>
        <BackupTableIcon />
      </ListItemIcon>
      <ListItemText primary="バックアップ" />
    </ListItemButton>
    <ListItemButton component="a" href="./Security">
      <ListItemIcon>
        <SecurityIcon />
      </ListItemIcon>
      <ListItemText primary="セキュリティ" />
    </ListItemButton>
    <ListItemButton component="a" href="./Setting">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="設定" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);